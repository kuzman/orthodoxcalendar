import { PrazniciProvider } from './praznici';

let praznici: PrazniciProvider = null;

describe('PrazniciProvider', () => {
  beforeEach(() => {
    praznici = new PrazniciProvider();
    // spyOn(praznici['storage'], 'set').and.callThrough();
  });

  it('returns a date for Easter', () => {
    expect(praznici.getVeligden(2017).valueOf()).toEqual(new Date(2017, 3, 16).valueOf());
  });

  it('expects that the winter Commemoration of the departed to be 59 days before Easter', () => {
    let easter = praznici.getVeligden(2017).valueOf();
    let zadushicaZimska = praznici.getZadushnicaZimska(2017);
    expect(zadushicaZimska.setDate(zadushicaZimska.getDate() + 59).valueOf()).toEqual(easter);
  });

  it('expects that the Forgiveness to be 49 days before Easter', () => {
    let easter = praznici.getVeligden(2017).valueOf();
    let forgiveness = praznici.getProchka(2017);
    expect(forgiveness.setDate(forgiveness.getDate() + 49).valueOf()).toEqual(easter);
  });

  it('expects that the Long Length to be 48 days before Easter', () => {
    let easter = praznici.getVeligden(2017).valueOf();
    let longLength = praznici.getVeligdenskiPosti(2017);
    expect(longLength.setDate(longLength.getDate() + 48).valueOf()).toEqual(easter);
  });
  
});