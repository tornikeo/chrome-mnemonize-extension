/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { app__main__Response } from '../models/app__main__Response';
import type { app__routers__mnemonics__Response } from '../models/app__routers__mnemonics__Response';
import type { Request } from '../models/Request';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Create Mnemonic
     * @param requestBody
     * @returns app__routers__mnemonics__Response Successful Response
     * @throws ApiError
     */
    public static createMnemonicMnemonicsPost(
        requestBody: Request,
    ): CancelablePromise<app__routers__mnemonics__Response> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mnemonics/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Home
     * @returns app__main__Response Successful Response
     * @throws ApiError
     */
    public static homeGet(): CancelablePromise<app__main__Response> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
        });
    }

}
