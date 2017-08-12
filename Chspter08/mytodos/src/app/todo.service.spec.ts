import { TodoService } from "./todo.service";
 
describe('TodoService Testing', () => {
  let service: TodoService;
  beforeEach(() => { service = new TodoService(); });
  it('getPending length should return 3', () => {
    expect(service.getPending().length).toBe(3);
  });
  it('getCompleted length should return 0', () => {
    expect(service.getCompleted().length).toBe(0);
  });
});
