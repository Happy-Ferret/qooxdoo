function QxListItem(vText, vIcon, vValue, vIconWidth, vIconHeight)
{
  QxAtom.call(this, vText, vIcon, vIconWidth, vIconHeight);

  if (isValid(vValue)) {
    this.setValue(vValue);
  };
  
  this.setWidth(null);
  this.setLeft(0);
  this.setRight(0);

  this.setCanSelect(false);
  this.setTimerCreate(false);
};

QxListItem.extend(QxAtom, "QxListItem");

QxListItem.addProperty({ name : "value", type : String });

proto.matchesString = function(vText) {
  return vText != "" && isValidString(this.getText()) && this.getText().toLowerCase().indexOf(vText.toLowerCase()) == 0;
};

proto.matchesStringExact = function(vText) {
  return vText != "" && isValidString(this.getText()) && this.getText().toLowerCase() == String(vText).toLowerCase();
};

proto.matchesValue = function(vText) {
  return vText != "" && this.getValue().toLowerCase().indexOf(vText.toLowerCase()) == 0;
};

proto.matchesValueExact = function(vText) {
  return vText != "" && this.getValue().toLowerCase() == String(vText).toLowerCase();
};

proto.matchesValueContains = function(vText) {
  return vText != "" && this.getValue().toLowerCase().indexOf(vText.toLowerCase()) != -1;
};
