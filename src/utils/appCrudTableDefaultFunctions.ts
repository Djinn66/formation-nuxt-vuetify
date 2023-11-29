/**
 * Default create item function.
 */
export const defaultCreateItemFunction = () => {
    console.warn('[App warn]: Create a function to create:')
}
/**
 * Default function for editing an item.
 *
 * @param item - The item to be edited.
 */
export const defaultEditItemFunction = <T>(item: T) => {
    console.warn('[App warn]: Create a function to edit:', item);
}

/**
 * Default function for deleting an item.
 *
 * @param item - The item to be deleted.
 */
export const defaultDeleteItemFunction = async <T>(item: T) => {
    console.warn('[App warn]: Create a function to delete:', item)
}