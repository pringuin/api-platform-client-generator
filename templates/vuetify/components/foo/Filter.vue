<template>
  <v-container fluid>
    {{#forEach parameters}}
    {{#ifOdd index}}
    <v-row>
    {{/ifOdd}}
    {{#compare type "==" "checkbox" }}
      <v-col cols="12" sm="6" md="6">
        <v-checkbox
          v-model="item.{{{name}}}"
          :label="$t('{{{name}}}')"
        />
      </v-col>
    {{/compare}}
    {{#compare type "==" "date" }}
      <v-col cols="12" sm="6" md="6">
        <InputDate
          v-model="item.{{{name}}}"
          :label="$t('{{{name}}}')"
        />
      </v-col>
    {{/compare}}
    {{#compare type "==" "time" }}
      <v-col cols="12" sm="6" md="6">
        <v-time-picker
          v-model="item.{{{name}}}"
          :label="$t('{{{name}}}')"
        />
      </v-col>
    {{/compare}}
    {{#compare type "==" "dateTime" }}
      <!-- todo : fix the dateTime format, not supported by default on vuetify -->
      <v-col cols="12" sm="6" md="6">
        <InputDate
          v-model="item.{{{name}}}"
          :label="$t('{{{name}}}')"
        />
      </v-col>
    {{/compare}}
    {{#compare type "==" "number" }}
      <v-col cols="12" sm="6" md="6">
        <v-text-field
          v-model.number="item.{{{name}}}"
          :label="$t('{{{name}}}')"
        />
      </v-col>
    {{/compare}}
    {{#compare type "==" "text" }}
    {{#if reference}}
      <v-col cols="12" sm="6" md="6">
        <v-combobox
          v-model="item.{{{name}}}"
          :items="{{{name}}}SelectItems"
          :no-data-text="$t('{{{../labels.noresults}}}')"
          :label="$t('{{{name}}}')"{{#unless maxCardinality}}
          multiple{{/unless}}
          item-text="name"
          item-value="@id"
          chips
        />
      </v-col>
    {{else}}
      <v-col cols="12" sm="6" md="6">
        <v-text-field
          v-model="item.{{{name}}}"
          :label="$t('{{{name}}}')"
          type="{{{type}}}"
        />
      </v-col>
    {{/if}}
    {{/compare}}
    {{#ifEven index}}
    </v-row>
    {{/ifEven}}
    {{#if isLast}}{{#ifOdd index}}
      <v-row cols="12"></v-row>
    </v-row>
    {{/ifOdd}}{{/if}}
    {{/forEach}}
  </v-container>
</template>

<script>
{{#if paramsHaveRefs}}
import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';
{{/if}}

export default {
  name: '{{{titleUcFirst}}}Filter',
  props: {
    values: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  mounted() {
    {{#each parameters}}
    {{#if reference}}
    this.{{{name}}}GetSelectItems();
    {{/if}}
    {{/each}}
  },

  computed: {
    {{#if paramsHaveRefs}}
    {{#each parameters}}
      {{#if reference}}
      {{#compare type "==" "text" }}
      ...mapFields('{{{lowercase reference.title}}}', {
        {{{name}}}SelectItems: 'selectItems',
      }),
      {{/compare}}
      {{/if}}
    {{/each}}
    {{/if}}
    // eslint-disable-next-line
    item() {
      return this.initialValues || this.values;
    }
  },
  methods: {
    {{#if paramsHaveRefs}}
    ...mapActions({
      {{#each parameters}}
      {{#compare type "==" "text" }}
      {{#if reference}}
      {{{name}}}GetSelectItems: '{{{lowercase reference.title}}}/fetchSelectItems',
      {{/if}}
      {{/compare}}
      {{/each}}
    }),
    {{/if}}
  }
};
</script>
