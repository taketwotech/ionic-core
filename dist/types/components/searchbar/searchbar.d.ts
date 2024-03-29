import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { AutocompleteTypes, Color, SearchbarChangeEventDetail, StyleEventDetail } from '../../interface';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export declare class Searchbar implements ComponentInterface {
  private nativeInput?;
  private isCancelVisible;
  private shouldAlignLeft;
  el: HTMLIonSearchbarElement;
  focused: boolean;
  noAnimate: boolean;
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  color?: Color;
  /**
   * If `true`, enable searchbar animation.
   */
  animated: boolean;
  /**
   * Set the input's autocomplete property.
   */
  autocomplete: AutocompleteTypes;
  /**
   * Set the input's autocorrect property.
   */
  autocorrect: 'on' | 'off';
  /**
   * Set the cancel button icon. Only applies to `md` mode.
   * Defaults to `"arrow-back-sharp"`.
   */
  cancelButtonIcon: string;
  /**
   * Set the the cancel button text. Only applies to `ios` mode.
   */
  cancelButtonText: string;
  /**
   * Set the clear icon. Defaults to `"close-circle"` for `ios` and `"close-sharp"` for `md`.
   */
  clearIcon?: string;
  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.
   */
  debounce: number;
  protected debounceChanged(): void;
  /**
   * If `true`, the user cannot interact with the input.
   */
  disabled: boolean;
  /**
   * A hint to the browser for which keyboard to display.
   * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
   * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
   */
  inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  /**
   * A hint to the browser for which enter key to display.
   * Possible values: `"enter"`, `"done"`, `"go"`, `"next"`,
   * `"previous"`, `"search"`, and `"send"`.
   */
  enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
  /**
   * Set the input's placeholder.
   * `placeholder` can accept either plaintext or HTML as a string.
   * To display characters normally reserved for HTML, they
   * must be escaped. For example `<Ionic>` would become
   * `&lt;Ionic&gt;`
   *
   * For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)
   */
  placeholder: string;
  /**
   * The icon to use as the search icon. Defaults to `"search-outline"` in
   * `ios` mode and `"search-sharp"` in `md` mode.
   */
  searchIcon?: string;
  /**
   * Sets the behavior for the cancel button. Defaults to `"never"`.
   * Setting to `"focus"` shows the cancel button on focus.
   * Setting to `"never"` hides the cancel button.
   * Setting to `"always"` shows the cancel button regardless
   * of focus state.
   */
  showCancelButton: 'never' | 'focus' | 'always';
  /**
   * Sets the behavior for the clear button. Defaults to `"focus"`.
   * Setting to `"focus"` shows the clear button on focus if the
   * input is not empty.
   * Setting to `"never"` hides the clear button.
   * Setting to `"always"` shows the clear button regardless
   * of focus state, but only if the input is not empty.
   */
  showClearButton: 'never' | 'focus' | 'always';
  /**
   * If `true`, enable spellcheck on the input.
   */
  spellcheck: boolean;
  /**
   * Set the type of the input.
   */
  type: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url';
  /**
   * the value of the searchbar.
   */
  value?: string | null;
  /**
   * Emitted when a keyboard input occurred.
   */
  ionInput: EventEmitter<KeyboardEvent>;
  /**
   * Emitted when the value has changed.
   */
  ionChange: EventEmitter<SearchbarChangeEventDetail>;
  /**
   * Emitted when the cancel button is clicked.
   */
  ionCancel: EventEmitter<void>;
  /**
   * Emitted when the clear input button is clicked.
   */
  ionClear: EventEmitter<void>;
  /**
   * Emitted when the input loses focus.
   */
  ionBlur: EventEmitter<void>;
  /**
   * Emitted when the input has focus.
   */
  ionFocus: EventEmitter<void>;
  /**
   * Emitted when the styles change.
   * @internal
   */
  ionStyle: EventEmitter<StyleEventDetail>;
  protected valueChanged(): void;
  protected showCancelButtonChanged(): void;
  connectedCallback(): void;
  componentDidLoad(): void;
  private emitStyle;
  /**
   * Sets focus on the specified `ion-searchbar`. Use this method instead of the global
   * `input.focus()`.
   */
  setFocus(): Promise<void>;
  /**
   * Returns the native `<input>` element used under the hood.
   */
  getInputElement(): Promise<HTMLInputElement>;
  /**
   * Clears the input field and triggers the control change.
   */
  private onClearInput;
  /**
   * Clears the input field and tells the input to blur since
   * the clearInput function doesn't want the input to blur
   * then calls the custom cancel function if the user passed one in.
   */
  private onCancelSearchbar;
  /**
   * Update the Searchbar input value when the input changes
   */
  private onInput;
  /**
   * Sets the Searchbar to not focused and checks if it should align left
   * based on whether there is a value in the searchbar or not.
   */
  private onBlur;
  /**
   * Sets the Searchbar to focused and active on input focus.
   */
  private onFocus;
  /**
   * Positions the input search icon, placeholder, and the cancel button
   * based on the input value and if it is focused. (ios only)
   */
  private positionElements;
  /**
   * Positions the input placeholder
   */
  private positionPlaceholder;
  /**
   * Show the iOS Cancel button on focus, hide it offscreen otherwise
   */
  private positionCancelButton;
  private getValue;
  private hasValue;
  /**
   * Determines whether or not the cancel button should be visible onscreen.
   * Cancel button should be shown if one of two conditions applies:
   * 1. `showCancelButton` is set to `always`.
   * 2. `showCancelButton` is set to `focus`, and the searchbar has been focused.
   */
  private shouldShowCancelButton;
  /**
   * Determines whether or not the clear button should be visible onscreen.
   * Clear button should be shown if one of two conditions applies:
   * 1. `showClearButton` is set to `always`.
   * 2. `showClearButton` is set to `focus`, and the searchbar has been focused.
   */
  private shouldShowClearButton;
  render(): any;
}
