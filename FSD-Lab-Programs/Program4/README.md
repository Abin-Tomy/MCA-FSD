# XML + XSD Demo

This folder contains a minimal, clean example of an XML document validated by an XML Schema (XSD).

## Files
- `book_catalog.xsd` — The schema.
- `catalog-valid.xml` — Valid XML that conforms to the schema.
- `catalog-invalid.xml` — Invalid XML with deliberate errors to see validation fail.
- `validate.py` — A small Python validator using the `xmlschema` package.

## Quick Start (Python)
1. Install the validator dependency:
   ```bash
   pip install xmlschema
   ```
2. Run validation:
   ```bash
   python validate.py catalog-valid.xml catalog-invalid.xml
   ```
   You should see one `[OK]` and one `[FAIL]`.

## Quick Start (xmllint)
If you have `xmllint` (libxml2) installed:
```bash
xmllint --noout --schema book_catalog.xsd catalog-valid.xml
xmllint --noout --schema book_catalog.xsd catalog-invalid.xml
```
The first command should exit with no errors; the second should report failures.

## Notes
- `genre` is constrained by an enumeration: one of `Fiction`, `Non-Fiction`, `Sci-Fi`, `Fantasy`, or `Technical`.
- `isbn` is a **required** attribute on `<Book>`.
- `Price` uses `xs:decimal` and `Published` uses the ISO `xs:date` format (`YYYY-MM-DD`).

Tweak the XSD or XML and re-run the validator to understand the constraints.
