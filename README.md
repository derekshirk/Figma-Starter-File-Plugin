[Figma Thumbnail](https://s3-alpha-sig.figma.com/img/0177/af25/716ea7baa28bb74a27c01b8a61275955?Expires=1684713600&Signature=LNI2IK7EoznUA-OS8JXC3LOscdwbkUsWIwseWsCCwuMaQjJG7-JTv6icrQlJaOwoipZcSWG9qoMG-dux3wlELoKUQrKLuBd1Ju-LPy001HSSJpi7ZpDl628bhb7Y~KUtaYuSitM3-u6-HzGu0iMIgf1eUDg-8r1~KVj-2WA3H5tY3E-lvfnY-GqdG1NJrUuzAOGFOn8APQGCHX4DAQnRIe-fwkS-N~x1~zLA2S3f2LwmHwsqpwsZqEm18OEtGr-dw34Nkz0e1WjODM5ukYF1-SsHAAVdEa5V2iuALBz5veLPmRTOi-71UeQSaXTx2aosKgZkIAKTznd5jOOkCBfcSw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)

# Figma New File Setup

Automate the several steps of setting up a new Figma File from a tempalte. This plugin currently acheives the following: 

- Renames "Page 1" to "Cover"
- Inserts a thumbnail image from a shared Figma library
  - Configuring your own cover image is possible by editing the `coverKey` variablein the `code.ts` file
- Sets the thumbnail image as the cover for the current file
- Adds a set of configurable pages with specificed page names.
  - Configuring your own pages is possible by editing the `FigmaPages` variable in the `code.ts` file
