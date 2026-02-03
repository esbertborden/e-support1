import { DataProvider } from "@refinedev/core";

export const dataProvider: DataProvider = {
  getOne: async ({ resource, id }) => {
    // Mock data for demo
    return {
      data: { id, title: `Mock ${resource} ${id}` },
    };
  },
  update: async ({ resource, id, variables }) => {
    return {
      data: { id, ...variables },
    };
  },
  create: async ({ resource, variables }) => {
    return {
      data: { id: Math.random(), ...variables },
    };
  },
  deleteOne: async ({ resource, id }) => {
    return {
      data: { id },
    };
  },
  getList: async ({ resource, pagination, filters, sorters }) => {
    // Mock data for demo
    const data = Array.from({ length: 10 }).map((_, index) => ({
      id: index + 1,
      title: `Mock ${resource} ${index + 1}`,
    }));

    return {
      data,
      total: data.length,
    };
  },
  getApiUrl: () => "https://api.example.com",
  getMany: async () => ({ data: [] }),
  deleteMany: async () => ({ data: [] }),
  updateMany: async () => ({ data: [] }),
  createMany: async () => ({ data: [] }),
};