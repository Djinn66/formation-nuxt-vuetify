import type {RouteParams} from "vue-router";

/**
 * Vérifie si les paramètres de la route fournis sont valides.
 * En fonction des routes décrites dans le fichier appAuthorizedRouteParams.ts
 *
 * @param params
 * @returns boolean - Vrai si les paramètres de la route sont valides, faux sinon.
 */
export const isValidRouteParams = (params: RouteParams) => {
    const { entity, action, id } = params;

    // Vérifie si l'entité fournie est autorisée
    const authorizedEntity = appAuthorizedRouteParams.entities.includes(entity as string);

    // Vérifie si l'action fournie est autorisée
    const authorizedAction = appAuthorizedRouteParams.actions.includes(action as string);

    // Vérifie si l'action nécessite un ID
    const actionWithId = appAuthorizedRouteParams.id.actions.includes(action as string);

    if (authorizedEntity) {
        if (typeof action === 'undefined') {
            return true;
        } else if (authorizedAction) {
            if (actionWithId) {
                return !!id && appAuthorizedRouteParams.id.regex.test(id as string);
            } else {
                return !id;
            }
        } else {
            return false;
        }
    }
    return false;
};