import { SpendingModule } from './spending.module';

describe('SpendingModule', () => {
  let spendingModule: SpendingModule;

  beforeEach(() => {
    spendingModule = new SpendingModule();
  });

  it('should create an instance', () => {
    expect(spendingModule).toBeTruthy();
  });
});
