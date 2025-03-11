
// Description: Get list of sponsorship opportunities
// Endpoint: GET /api/sponsorships
// Request: { filters?: { location?: string, type?: string, minPrice?: number, maxPrice?: number } }
// Response: { sponsorships: Array<{ _id: string, title: string, type: string, price: number, location: string, description: string, status: 'available' | 'pending' | 'taken' }> }
export const getSponsorships = (filters?: any) => {
  // Mocking the response
  const allSponsorships = [
    {
      _id: '1',
      title: 'URC Jersey Front Sponsorship',
      type: 'Jersey',
      price: 750000,
      location: 'Ireland',
      description: 'Prime jersey front sponsorship for a leading United Rugby Championship team',
      status: 'available'
    },
    {
      _id: '2',
      title: 'URC Match Day Streaming Ads',
      type: 'Streaming',
      price: 250000,
      location: 'Multiple Regions',
      description: 'Premium advertising spots during URC match day streaming broadcasts',
      status: 'available'
    },
    {
      _id: '3',
      title: 'Stadium Naming Rights - URC Venue',
      type: 'Venue',
      price: 2000000,
      location: 'South Africa',
      description: 'Naming rights for a major United Rugby Championship stadium',
      status: 'pending'
    },
    {
      _id: '4',
      title: 'URC LED Advertising Boards',
      type: 'In-Stadium',
      price: 150000,
      location: 'Wales',
      description: 'LED advertising board space for all home games',
      status: 'available'
    },
    {
      _id: '5',
      title: 'URC Official Partner Status',
      type: 'Partnership',
      price: 1000000,
      location: 'All Regions',
      description: 'Become an official partner of the United Rugby Championship',
      status: 'available'
    },
    {
      _id: '6',
      title: 'Team Training Kit Sponsorship',
      type: 'Jersey',
      price: 300000,
      location: 'Scotland',
      description: 'Training kit sponsorship for a leading Scottish rugby team',
      status: 'available'
    },
    {
      _id: '7',
      title: 'Mobile App Advertising',
      type: 'Digital',
      price: 100000,
      location: 'Global',
      description: 'Premium advertising space in the official URC mobile app',
      status: 'available'
    },
    {
      _id: '8',
      title: 'Match Ball Sponsorship',
      type: 'Equipment',
      price: 200000,
      location: 'Italy',
      description: 'Official match ball sponsorship for all Italian home games',
      status: 'available'
    },
    {
      _id: '9',
      title: 'VIP Hospitality Suite',
      type: 'Hospitality',
      price: 450000,
      location: 'Ireland',
      description: 'Naming rights and branding for premium hospitality suite',
      status: 'pending'
    },
    {
      _id: '10',
      title: 'Youth Development Program',
      type: 'Community',
      price: 175000,
      location: 'Wales',
      description: 'Sponsorship of youth rugby development initiatives',
      status: 'available'
    }
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      let filteredSponsorships = [...allSponsorships];

      if (filters) {
        if (filters.location) {
          filteredSponsorships = filteredSponsorships.filter(s => 
            s.location.toLowerCase().includes(filters.location.toLowerCase())
          );
        }
        if (filters.type) {
          filteredSponsorships = filteredSponsorships.filter(s => 
            s.type.toLowerCase() === filters.type.toLowerCase()
          );
        }
        if (filters.minPrice) {
          filteredSponsorships = filteredSponsorships.filter(s => 
            s.price >= filters.minPrice
          );
        }
        if (filters.maxPrice) {
          filteredSponsorships = filteredSponsorships.filter(s => 
            s.price <= filters.maxPrice
          );
        }
      }

      resolve({ sponsorships: filteredSponsorships });
    }, 500);
  });
};

// Description: Submit sponsorship application
// Endpoint: POST /api/sponsorships/apply
// Request: { sponsorshipId: string }
// Response: { success: boolean, message: string }
export const applySponsorships = (_sponsorshipId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Application submitted successfully'
      });
    }, 500);
  });
};