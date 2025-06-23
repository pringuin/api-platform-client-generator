import { defineStore } from 'pinia';
import api from 'src/utils/api';
import { extractHubURL } from 'src/utils/mercure';
import type { PagedCollection } from 'src/types/collection';
import type { ListParams } from 'src/types/list';
import type { {{titleUcFirst}} } from 'src/types/{{lc}}';
import type { View } from 'src/types/view';

interface State {
  items: {{titleUcFirst}}[];
  totalItems: number;
  hubUrl?: URL;
  isLoading: boolean;
  view?: View;
  error?: string;
}

export const use{{titleUcFirst}}ListStore = defineStore('{{lc}}List', {
  state: (): State => ({
    items: [],
    totalItems: 0,
    hubUrl: undefined,
    isLoading: false,
    view: undefined,
    error: undefined,
  }),

  actions: {
    async getItems(page: string, params: ListParams) {
      this.toggleLoading();

      try {
        const path = page ? `{{name}}?page=${page}` : '{{name}}';
        const response = await api(path, { params });
        const data: PagedCollection<{{titleUcFirst}}> = await response.json();
        const hubUrl = extractHubURL(response);

        this.toggleLoading();

        this.setItems(data['{{hydraPrefix}}member']);
        this.setTotalItems(data['{{hydraPrefix}}totalItems'] ?? 0);
        this.setView(data['{{hydraPrefix}}view']);

        if (hubUrl) {
          this.setHubUrl(hubUrl);
        }
      } catch (error) {
        this.toggleLoading();

        if (error instanceof Error) {
          this.setError(error.message);
        }
      }
    },

    toggleLoading() {
      this.isLoading = !this.isLoading;
    },

    setItems(items: {{titleUcFirst}}[]) {
      this.items = items;
    },

    setTotalItems(totalItems: number) {
      this.totalItems = totalItems;
    },

    setHubUrl(hubUrl: URL) {
      this.hubUrl = hubUrl;
    },

    setView(view: View) {
      this.view = view;
    },

    setError(error: string) {
      this.error = error;
    },

    updateItem(updatedItem: {{titleUcFirst}}) {
      const item: {{titleUcFirst}} | undefined = this.items.find(
        (i) => i['@id'] === updatedItem['@id']
      );

      if (!item) return;

      Object.assign(item, updatedItem);
    },

    deleteItem(deletedItem: {{titleUcFirst}}) {
      this.items = this.items.filter((item) => {
        return item['@id'] !== deletedItem['@id'];
      });
    },
  },
});
