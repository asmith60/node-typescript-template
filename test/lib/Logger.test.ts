import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

describe('Logger Placeholder', () => {
  it('always passes', () => {
    return chai.expect(true).to.equal(true);
  });
});
