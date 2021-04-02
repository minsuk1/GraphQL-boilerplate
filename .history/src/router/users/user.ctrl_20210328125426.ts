import { RequestHandler } from "express";
import Joi from "@hapi/joi";
import createHttpError from "http-errors";
import { userService } from "../../services";

export const login: RequestHandler = async (req, res, next) => {
    try {
        const schema = Joi.object({
            email: Joi.string()
                .email()
                .required(),
            password: Joi.string().required(),
        });

        const loginArgs = await schema.validateAsync(req.body).catch(err => {
            throw createHttpError(400, err.message);
        });

        const token = await userService.login(loginArgs);

        res.json({
            token,
        });
    } catch (err) {
        next(err);
    }
};