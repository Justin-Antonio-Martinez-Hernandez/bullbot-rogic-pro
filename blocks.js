function createBlock(type) {

  return {
    id: crypto.randomUUID(),
    type,
    config: {},
    children: [],
    elseChildren: []
  };
}
