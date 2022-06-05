import { Router } from "express";
import { CreateLocationController } from "../modules/locations/UseCases/createLocation/CreateLocationController";
import { ListLocationsController } from "../modules/locations/UseCases/listLocations/ListLocationsController";

const locationRouter = Router();

const createLocationController = new CreateLocationController();
const listLocationsController = new ListLocationsController();

locationRouter.post("/", createLocationController.handle);

locationRouter.get("/", listLocationsController.handle);

export { locationRouter }