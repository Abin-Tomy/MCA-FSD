from lxml import etree

# Load schema - changed filename to match your XSD file
with open("studenteg.xsd", "rb") as f:
    schema_root = etree.XML(f.read())
schema = etree.XMLSchema(schema_root)

# XML parser
parser = etree.XMLParser(schema=schema)

def validate_xml(xml_file):
    try:
        with open(xml_file, "rb") as f:
            etree.fromstring(f.read(), parser)
        print(f"{xml_file}: VALID ✅")
    except etree.XMLSyntaxError as e:
        print(f"{xml_file}: INVALID ❌")
        print("Error:", e)

# Validate both XML files - changed filenames to match your actual files
validate_xml("student_valid.xml")  # This should be your valid XML file
validate_xml("student_invalid.xml")  # This should be your invalid XML file