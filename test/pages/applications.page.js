module.exports = {
  url: '#/applications',
  header: element(by.xpath('//div[contains(@class, \'infrastructure-section\')]//h2')),
  menu: element(by.buttonText('Actions')),
  createApplicationMenuItem: element(by.linkText('Create Application')),
};
