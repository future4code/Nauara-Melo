import express from "express";
import {  } from "../controller/AlbumController";
import { MusicController } from "../controller/MusicController";

export const musicRouter = express.Router();

musicRouter.post("/add", new MusicController().addMusic);
