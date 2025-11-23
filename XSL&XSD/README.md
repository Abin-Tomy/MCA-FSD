# XML + XSD + XSL Demo

This demo shows how XML can be:
- **validated** with an XSD schema,
- **transformed** with XSLT into an HTML table.

## Files
- `book_catalog.xsd` — Schema for the book catalog.
- `catalog.xml` — XML document with reference to XSD + XSL.
- `catalog.xsl` — XSL stylesheet that renders the XML into a table.
- `README.md` — This file.

## Usage
1. Open `catalog.xml` in any modern browser → it should render a styled HTML table.
2. Validate XML against XSD (using xmllint or Python xmlschema). Example:

```bash
xmllint --noout --schema book_catalog.xsd catalog.xml
```

or

```bash
pip install xmlschema
python -c "import xmlschema; xmlschema.XMLSchema('book_catalog.xsd').validate('catalog.xml')"
```

