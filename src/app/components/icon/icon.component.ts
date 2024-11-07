import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {

  @Input() iconPath: string = '';
  public svgContent: SafeHtml = '';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  public ngOnInit(): void {
    this.loadSvg();
  }

  private loadSvg(): void {
    this.http.get('../../assets/images/' + this.iconPath, { responseType: 'text' }).subscribe(
      data => {
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(data);
      },
      error => console.error('Error loading SVG:', error)
    );
  }
}