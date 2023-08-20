import { ActivatedRouteSnapshot, Params, createUrlTreeFromSnapshot } from '@angular/router';
import { Subject } from 'rxjs';

/**
 * Represents a breadcrumb.
 */
export class BreadcrumbRef {
  private _url: string = '/';
  private _activatedRouteSnapshot: ActivatedRouteSnapshot | null = null;

  /**
   * Used to notify subscribers when the breadcrumb has changed.
   */
  readonly stateChanges = new Subject<void>();

  /**
   * Creates a new instance of BreadcrumbRef.
   *
   * @param _label The label of the breadcrumb.
   */
  constructor(private _label: string = '') {}

  /**
   * The label of the breadcrumb.
   */
  get label(): string {
    return this._label;
  }
  set label(value: string) {
    this.setLabel(value);
  }

  /**
   * The URL of the breadcrumb.
   */
  get url(): string {
    return this._url;
  }

  /**
   * The query params of the breadcrumb.
   */
  get queryParams(): Params | undefined {
    return this._activatedRouteSnapshot?.queryParams;
  }

  /**
   * The URL fragment of the breadcrumb.
   */
  get fragment(): string | undefined {
    return this._activatedRouteSnapshot?.fragment || undefined;
  }

  /** @internal */
  _reset(): void {
    this._activatedRouteSnapshot = null;
    this._label = '';
    this.stateChanges.next();
  }

  /** @internal */
  _setActivatedRouteSnapshot(value: ActivatedRouteSnapshot | null) {
    if (value == null) {
      this._url = '/';
      return;
    }

    this._activatedRouteSnapshot = value;
    this._url = createUrlTreeFromSnapshot(value, ['.']).toString();
    this.stateChanges.next();
  }

  private setLabel(value: string): void {
    this._label = value;
    this.stateChanges.next();
  }
}
