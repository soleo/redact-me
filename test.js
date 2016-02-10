import test from 'ava';
import fn from './';

test('main', t => {
	t.is(fn('Email: username@example.com'), 'Email:');
	t.is(fn('Email: username+extra@example.com'), 'Email:');
	t.is(fn('Email: username@example.com.cn'), 'Email:');

	t.is(fn('US Phone: 123-456-7890'), 'US Phone:');
	t.is(fn('US Phone: (123) 456-7890'), 'US Phone:');
	t.is(fn('US Phone: 123-1234'), 'US Phone:');
	// t.is(fn('Not US Phone: 2004-2007'), 'Not US Phone: 2004-2007');
	t.is(fn('US Phone: (123)456-7890'), 'US Phone:');
	t.is(fn('US Phone: 123.456.7890'), 'US Phone:');
	t.is(fn('US Phone: 456.7890'), 'US Phone:');
});
