const albums = [
  '2hMA3k1qqZj4591oxjqQZx',
  '3jxc1QWr2cmkcvctkiZnHi',
  '5LdJz37QiPZ1kFpIva1twi', // Al
  '5LdJz37QiPZ1kFpIva1twi', // Al
  '1cW4f6MsjVvaETYjbQY0Ip',
  '5LdJz37QiPZ1kFpIva1twi', // Al
  '5LdJz37QiPZ1kFpIva1twi', // Al
  '016AZkNfYyZaHvZYwi9U69',
  '43jf6TiIKBsUkYcXbcaXlN',
  '5LdJz37QiPZ1kFpIva1twi', // Al
  '61vxUvosI96p5brDcwJpUS',
  '5UqT63doUxuCdvxJek78cD',
  '5LdJz37QiPZ1kFpIva1twi', // Al
  '576KVOgNsv3sym5gnDkmYd',
  '7DXPxgQOSG705lSU8s6Hvm',
  '5LdJz37QiPZ1kFpIva1twi', // Al
  '140BMrMHrJKORgGdutEFde',
  '2tk4OOnz9uDT9BLJY4EBLY',
  '6qU9OQbVjw7HwhMFRYLirB',
  '5LdJz37QiPZ1kFpIva1twi', // Al
  '1PBw30oj8VdileUpLUzhhS',
  '4fhClpF3O4SVMPG9Hqs5qF',
  '5ckDPevk0FTzV7Ym3fAh8U',
  '5K00MRqnPS70qQEcp6Hztg',
  '5LdJz37QiPZ1kFpIva1twi', // Al
  '2hb6aPSmJLdS99oFOp34EP',
  '6YUoogEoSI4rcIKnGFI2l6',
  '4qxAYQ5smkYUFntAloHkrr',
  '7IWlNqp8s1VDB62KGJN92m',
  '5LdJz37QiPZ1kFpIva1twi', // Al
  '2EaFjK4isYVM689kcpyIAY',
  '08g5aYotEIElY6mJDAC3hG',
  '1wF6WneR7NyifTyXhhPQaP',
  '5LdJz37QiPZ1kFpIva1twi', // Al
  '11TezuH5aHusYWcp9ZXeWR',
  '0JZvgD1h6bUZngu7YZUFfG',
  '7ESONSYr5TMM5sOJApFSB0',
  '7jVjLDQ8IZ3CaBsKDxXOmC',
  '5LdJz37QiPZ1kFpIva1twi', // Al
  '6drmFnntxB3LgB0djtQw1L',
  '2tEvJY6mmREPqmxZG5PJMT',
  '5LdJz37QiPZ1kFpIva1twi', // Al
  '5DEL0SSMojInN54XnSWwR1',
  '0Szc3Ns2c4ISSsuoDyb95w',
  '470e8euOkpXnapHyOTR9aZ',
  '6OlWZuO3iT7RbhcmqPCbCK',
  '5LdJz37QiPZ1kFpIva1twi', // Al
  '3qnWQRiiv8upClnaeZHTPx',
  '3vHeU7fpIHT9G7rRTDM65Z',
  '6FqKEvbSjVJQXX8rFFdPnA',
  '5LdJz37QiPZ1kFpIva1twi', // Al
  '1PbUFFYa538V9xvlAZObpd',
  '3rTt2Gu71ktKEzfDumvuYG',
  '7Fk122OcKaeQmWd4zRuFN7',
  '0wT6FeHE3QoNqKkwsOgyQt',
  '5LdJz37QiPZ1kFpIva1twi', // Al
  '751afniWpp7Bl91FEh5biq',
  '6UJv86xE1RkM8ETNig8CWF',
  '7eII7QAOqIVEYVJPJgMMeN',
  '2gwtUQfKm4CBPWbdTx5kWD',
  '5LdJz37QiPZ1kFpIva1twi', // Al
  '1xdQqexBnhvycuqFc6KUh9',
  '024ZNKu3nm7RUpW5PLlWVu',
  '7J8ZP98ctps7EG84uIDY5N',
  '4E97XPVCllAnwvpnxb53NM',
  '5LdJz37QiPZ1kFpIva1twi', // Al
  '6y26geoWdBUHhgScHKGYsH',
  '15I3T36yTYhOj6nRy1O1Jf',
]

export const getRandomAlbum = () => {
  return albums[Math.floor((Math.random()*albums.length))]
}
