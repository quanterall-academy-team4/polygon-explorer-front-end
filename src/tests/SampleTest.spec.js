import Spinner from "@/ui/Spinner";
import Header from "./components/Header.vue";
import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";

describe("AppLoadingScreen", () => {
  let component;

  beforeEach(() => {
    component = shallowMount(Header);
  });

  it("should render Component on mount", () => {
    expect(component.find(Spinner).exists()).to.be.true;
  });
});