import {useState, useEffect}            from 'react';
import {BehaviorSubject, Subscription}  from 'rxjs';

function useObservable<T>(observable: BehaviorSubject<T>, initValue: T): T {
    const [value, setValue] = useState<T>(initValue);

    useEffect(
        () => {

            const subscription: Subscription = observable.subscribe({
                next: (data: T) => {
                    setValue(data);
                },
            });

            return () => {
                subscription.unsubscribe();
            };

        },
        [observable],
    );

    return value;
}

function useBehaviorSubject<T>(subject: BehaviorSubject<T>): T {
    return useObservable(subject, subject.getValue());
}

export {useObservable, useBehaviorSubject};


