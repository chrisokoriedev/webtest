import Flicking from "@egjs/flicking";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";

const flicking = new Flicking("#flick", {
  circular: true
});

flicking.addPlugins(new Pagination({
  type: "bullet"
}));