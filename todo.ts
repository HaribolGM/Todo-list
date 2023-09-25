interface Task {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-list';
  list: Task[] = [];

  addTask(item: string): void {
    this.list.push({ id: this.list.length, name: item });
    console.warn(this.list);
  }

  removeTask(id: number): void {
    console.warn(id);
    this.list = this.list.filter(item => item.id !== id);
  }
}
