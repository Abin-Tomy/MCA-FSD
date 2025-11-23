<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <title>Book Catalog</title>
        <style>
          table { border-collapse: collapse; width: 80%; margin: 20px auto; }
          th, td { border: 1px solid #333; padding: 8px; text-align: left; }
          th { background: #eee; }
        </style>
      </head>
      <body>
        <h2 style="text-align:center;">Book Catalog</h2>
        <table>
          <tr>
            <th>ISBN</th>
            <th>Genre</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Published</th>
          </tr>
          <xsl:for-each select="Catalog/Book">
            <tr>
              <td><xsl:value-of select="@isbn"/></td>
              <td><xsl:value-of select="@genre"/></td>
              <td><xsl:value-of select="Title"/></td>
              <td><xsl:value-of select="Author"/></td>
              <td><xsl:value-of select="Price"/></td>
              <td><xsl:value-of select="Published"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
