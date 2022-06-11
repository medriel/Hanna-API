import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateLocationController } from "../modules/locations/UseCases/createLocation/CreateLocationController";
import { DeleteLocationController } from "../modules/locations/UseCases/deleteLocation/DeleteLocationController";
import { ListLocationsController } from "../modules/locations/UseCases/listLocations/ListLocationsController";

const locationRouter = Router();

const createLocationController = new CreateLocationController();
const listLocationsController = new ListLocationsController();
const deleteLocationController = new DeleteLocationController();

locationRouter.use(ensureAuthenticated);

locationRouter.post("/", createLocationController.handle);

locationRouter.get("/", listLocationsController.handle);

locationRouter.delete("/:id", deleteLocationController.handle);

export { locationRouter }