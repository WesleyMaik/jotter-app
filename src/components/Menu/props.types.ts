export type Item = {
    /**
     * Text to menu item.
     */
    label: string;
    /**
     * Action to menu item.
     */
    action?: Action;
};
  
/**
 * Action from item
 */
export type Action =
| {
    url: string;
    }
| (() => void);