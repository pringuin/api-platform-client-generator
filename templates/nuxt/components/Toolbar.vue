<template>
  <v-toolbar class="my-md-auto" elevation="0">
    <slot name="left"></slot>
    <v-spacer />
    <div>
      <v-btn
        v-if="editHref"
        :loading="isLoading"
        color="primary"
        :href="editHref"
      >
        Edit
      </v-btn>
      <v-btn
        v-if="listHref"
        :loading="isLoading"
        color="primary"
        :href="listHref"
      >
        Back to list
      </v-btn>
      <v-btn
        v-if="handleSubmit"
        :loading="isLoading"
        color="primary"
        @click="submitItem"
      >
        Submit
      </v-btn>
      <v-btn
        v-if="handleReset"
        class="ml-sm-2"
        @click="resetItem"
      >
        Reset
      </v-btn>
      <v-btn
        v-if="handleDelete"
        color="error"
        class="ml-sm-2"
        @click="confirmDelete = true"
      >
        Delete
      </v-btn>

      <v-btn v-if="handleAdd" color="primary" rounded @click="addItem">
        <v-icon>mdi-plus-circle</v-icon>
      </v-btn>
    </div>
    <ConfirmDelete
      v-if="handleDelete"
      :visible="confirmDelete"
      :handle-delete="handleDelete"
      @close="confirmDelete = false"
    />
  </v-toolbar>
</template>

<script>
import ConfirmDelete from './ConfirmDelete';

export default {
  name: 'Toolbar',
  components: {
    ConfirmDelete
  },
  data: () => ({
    confirmDelete: false
  }),
  props: {
    editHref: {
      type: String,
      required: false
    },
    listHref: {
      type: String,
      required: false
    },
    handleSubmit: {
      type: Function,
      required: false
    },
    handleReset: {
      type: Function,
      required: false
    },
    handleDelete: {
      type: Function,
      required: false
    },
    handleAdd: {
      type: Function,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  methods: {
    addItem() {
      if (this.handleAdd) {
        this.handleAdd();
      }
    },
    submitItem() {
      if (this.handleSubmit) {
        this.handleSubmit();
      }
    },
    resetItem() {
      if (this.handleReset) {
        this.handleReset();
      }
    }
  }
};
</script>
