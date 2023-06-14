import Flicking from "@egjs/flicking";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";

const flicking = new Flicking("#flick", {
  circular: true
});

flicking.addPlugins(new Arrow());