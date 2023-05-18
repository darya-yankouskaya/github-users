import { ChangeDetectorRef, inject, ViewRef } from '@angular/core';
import { MonoTypeOperatorFunction, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export function untilDestroy(): <T>() => MonoTypeOperatorFunction<T> {
  const subject = new Subject<void>();
  const viewRef = inject(ChangeDetectorRef) as ViewRef;

  setTimeout(() => {
    viewRef.onDestroy(() => {
      subject.next();
      subject.complete();
    });
  });

  return <T>() => takeUntil<T>(subject.asObservable());
}
