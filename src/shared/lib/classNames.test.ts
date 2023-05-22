import { classNames } from 'shared/lib/classNames';

describe('classNames', () => {
    test('with cls', () => {
        expect(classNames('some')).toBe('some');
    });
    test('with cls and additional', () => {
        expect(classNames('some', {}, ['some1'])).toBe('some some1');
    });
    test('with cls and mods', () => {
        expect(classNames('some', { some1: true })).toBe('some some1');
    });
    test('with cls and mods false', () => {
        expect(classNames('some', { some1: false, some2: undefined }))
            .toBe('some');
    });
    test('with all params', () => {
        expect(classNames('some', { some2: true }, ['some1']))
            .toBe('some some1 some2');
    });
});
