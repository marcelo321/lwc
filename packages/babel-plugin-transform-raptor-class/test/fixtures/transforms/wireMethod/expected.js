import _tmpl from "./actual.html";
export default class Foo {
  innerRecordMethod() {}

  render() {
    return _tmpl;
  }

}
Foo.wire = {
  innerRecordMethod: {
    method: 1,
    type: "record",
    params: { recordId: "recordId" },
    static: { fields: ["Account", 'Rate'] }
  }
};
Foo.observedAttributes = ["record-id"];
