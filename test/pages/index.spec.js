import { shallowMount } from "@vue/test-utils";
import Index from "~/pages/index.vue";

describe("Index.vue", () => {
  it("is a vue instance", () => {
    const wrapper = shallowMount(Index);
    console.log(wrapper);
  });
});
