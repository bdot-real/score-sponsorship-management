
// Description: Get active contracts
// Endpoint: GET /api/contracts
// Request: {}
// Response: { contracts: Array<{ _id: string, sponsorshipId: string, title: string, status: string, startDate: string, endDate: string, value: number, timeline: Array<{ date: string, title: string, description: string, status: 'completed' | 'current' | 'upcoming' }> }> }
export const getContracts = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        contracts: [
          {
            _id: '1',
            sponsorshipId: '1',
            title: 'Premier League Jersey Contract',
            status: 'active',
            startDate: '2024-01-01',
            endDate: '2024-12-31',
            value: 1000000,
            timeline: [
              {
                date: '2023-12-01',
                title: 'Initial Contact',
                description: 'First discussion about sponsorship opportunity',
                status: 'completed'
              },
              {
                date: '2023-12-15',
                title: 'Proposal Submission',
                description: 'Detailed sponsorship proposal submitted',
                status: 'completed'
              },
              {
                date: '2023-12-30',
                title: 'Negotiations',
                description: 'Terms and conditions discussion',
                status: 'completed'
              },
              {
                date: '2024-01-01',
                title: 'Contract Signing',
                description: 'Official contract execution',
                status: 'completed'
              },
              {
                date: '2024-03-01',
                title: 'First Review',
                description: 'Quarterly performance review',
                status: 'current'
              },
              {
                date: '2024-06-01',
                title: 'Mid-term Evaluation',
                description: 'Mid-year performance assessment',
                status: 'upcoming'
              },
              {
                date: '2024-12-31',
                title: 'Contract Completion',
                description: 'End of contract term',
                status: 'upcoming'
              }
            ]
          }
        ]
      });
    }, 500);
  });
};

// Description: Sign contract
// Endpoint: POST /api/contracts/sign
// Request: { contractId: string }
// Response: { success: boolean, message: string }
export const signContract = (_contractId: string) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Contract signed successfully'
      });
    }, 500);
  });
};