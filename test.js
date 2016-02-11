import test from 'ava';
import fn from './';

test('main', t => {
	t.is(fn('Email: username@example.com'), 'Email: ');
	t.is(fn('Email: <username@example.com>'), 'Email: ');
	t.is(fn('Email: username+extra@example.com'), 'Email: ');
	t.is(fn('Email: username@example.com.cn'), 'Email: ');

	t.is(fn('US Phone: 123-456-7890'), 'US Phone: ');
	t.is(fn('US Phone: (123) 456-7890'), 'US Phone: ');
	t.is(fn('US Phone: 123-1234'), 'US Phone:');
	t.is(fn('US Phone:123-1234'), 'US Phone');
	t.is(fn('Not US Phone: 2004-2007'), 'Not US Phone: 2004-2007');
	t.is(fn('US Phone: (123)456-7890'), 'US Phone: ');
	t.is(fn('US Phone: 123.456.7890'), 'US Phone: ');
	t.is(fn('US Phone: 456.7890'), 'US Phone:');

	// Credit Card Test Cases from Stripe
	// Source: https://stripe.com/docs/testing
	t.is(fn('Visa: 4242424242424242'), 'Visa:');
	t.is(fn('Visa: 4012888888881881'), 'Visa:');
	t.is(fn('MasterCard: 4000056655665556'), 'MasterCard:');
	t.is(fn('MasterCard: 5555555555554444'), 'MasterCard:');
	t.is(fn('MasterCard: 5200828282828210'), 'MasterCard:');
	// t.is(fn('American Express: 378282246310005'), 'American Express:');
	// t.is(fn('American Express: 371449635398431'), 'American Express:');
	t.is(fn('Discover: 6011111111111117'), 'Discover:');
	t.is(fn('Discover: 6011000990139424'), 'Discover:');
	// t.is(fn('Diners Club: 30569309025904'), 'Diners Club:');
	// t.is(fn('Diners Club: 38520000023237'), 'Diners Club:');
	t.is(fn('JCB: 3530111333300000'), 'JCB:');
	t.is(fn('JCB: 3566002020360505'), 'JCB:');

	t.is(fn('SSN: 000-00-0000'), 'SSN: ');

	t.is(fn('IP Address: 192.168.0.1'), 'IP Address: ');
	t.is(fn('IP Address: 127.0.0.1'), 'IP Address: ');
	t.is(fn('IP Address: 132.254.111.10'), 'IP Address: ');
	t.is(fn('IP Address: 266.266.266.266'), 'IP Address: 266.266.266.266');
});
