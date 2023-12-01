export const appAuthorizedRouteParams = {
    entities:['products','users'],
    actions:['create','update'],
    id:{
        actions:['update',],
        regex:/^[0-9]+$/,
    }
}