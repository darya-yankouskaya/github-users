import { DebugElement, Type } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export function findDebugElementByCss<T>(
  fixture: ComponentFixture<T>,
  selector: string,
): DebugElement | null {
  return fixture.debugElement.query(By.css(selector));
}

export function findAllDebugElementsByCss<T>(
  fixture: ComponentFixture<T>,
  selector: string,
): DebugElement[] {
  return fixture.debugElement.queryAll(By.css(selector));
}

export function findElementByCss<T, U extends HTMLElement>(
  fixture: ComponentFixture<T>,
  selector: string,
): U | null {
  return fixture.nativeElement.querySelector(selector);
}

export function findAllElementsByCss<T, U extends HTMLElement>(
  fixture: ComponentFixture<T>,
  selector: string,
): U[] {
  return fixture.nativeElement.querySelectorAll(selector);
}

export function findDebugElementByDirective<T, U extends Type<unknown>>(
  fixture: ComponentFixture<T>,
  selector: U,
): DebugElement | null {
  return fixture.debugElement.query(By.directive(selector));
}

export function findAllDebugElementsByDirective<T, U extends Type<unknown>>(
  fixture: ComponentFixture<T>,
  selector: U,
): DebugElement[] {
  return fixture.debugElement.queryAll(By.directive(selector));
}

export function findDirective<T, U extends Type<unknown>>(
  fixture: ComponentFixture<T>,
  selector: U,
): InstanceType<U> | null {
  return findDebugElementByDirective(fixture, selector)?.componentInstance;
}
