import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingComponent {

}
