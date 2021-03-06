export const relationsMixin = {
  methods: {
    setFields({ fieldKey, values = [] }) {
      const foundField = this.schema.fields.find(
        (field) => field.model === fieldKey
      )
      foundField.values = [...values]
    },
  },
}
