#!/usr/bin/env python3
"""
Validate XML files against the provided XSD.

Usage:
  python validate.py catalog-valid.xml catalog-invalid.xml
"""
import sys

def main():
    try:
        import xmlschema
    except ImportError:
        print("The 'xmlschema' package is required.\n"
              "Install it with: pip install xmlschema")
        sys.exit(1)

    schema = xmlschema.XMLSchema("book_catalog.xsd")
    if len(sys.argv) == 1:
        print("No XML files specified. Example:\n  python validate.py catalog-valid.xml")
        sys.exit(2)

    exit_code = 0
    for xml_path in sys.argv[1:]:
        try:
            schema.validate(xml_path)
            print(f"[OK]     {xml_path}")
        except xmlschema.validators.exceptions.XMLSchemaValidationError as e:
            print(f"[FAIL]   {xml_path}")
            print(f"  -> {e!s}")
            exit_code = 3
    sys.exit(exit_code)

if __name__ == "__main__":
    main()
