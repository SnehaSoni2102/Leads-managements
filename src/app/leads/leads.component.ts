import { Component, OnInit } from '@angular/core';
import { LeadService } from '../lead.service';


@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.css'
})
export class LeadsComponent implements OnInit {
  leads: any[] = [];
  error: string = '';

  constructor(private leadService: LeadService) { }

  ngOnInit(): void {
    this.loadLeads();
  }

  loadLeads(): void {
    this.leadService.getAllLeads().subscribe({
      next: (data) => {
        console.log("Fetched data", data);
        this.leads = data.leads; // Adjust based on actual response structure
      },
      error: (err) => {
        this.error = 'Failed to load leads.';
        console.error('Leads fetch error:', err);
      }
    });
  }
}
