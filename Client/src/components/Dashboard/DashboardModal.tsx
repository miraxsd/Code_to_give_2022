import React from 'react'
import '../Dashboard/DashboardModal.scss'

const DashboardModal = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="input-group rounded">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span className="input-group-text border-0" id="search-addon">
                        <i className="fas fa-search"></i>
                    </span>
                    </div>
            </div>
            <div className="col-md-6">
                <div className="card scrollbar scrollbar-primary">
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">1. NO POVERTY</li>
                            <li className="list-group-item">2. ZERO HUNGER</li>
                            <li className="list-group-item">3. GOOD HEALTH AND WELL-BEING</li>
                            <li className="list-group-item">4. QUALITY EDUCATION</li>
                            <li className="list-group-item">5. GENDER EQUALITY</li>
                            <li className="list-group-item">6. CLEAN WATER AND SANITATION</li>
                            <li className="list-group-item">7. AFFORDABLE AND CLEAN ENERGY</li>
                            <li className="list-group-item">8. DECENT WORK AND ECONOMIc GROWTH</li>
                            <li className="list-group-item">9. INDUSTRY, INNOVATION AND INFRASTRUCTURE</li>
                            <li className="list-group-item">10. REDUCED INEQUALITIES</li>
                            <li className="list-group-item">11. SUSTAINABLE CITIES AND COMMUNITIES</li>
                            <li className="list-group-item">12. RESPONSIBLE CONSUMPTION AND PRODUCTION</li>
                            <li className="list-group-item">13. CLIMATE ACTION</li>
                            <li className="list-group-item">14. LIFE BELOW WATER</li>
                            <li className="list-group-item">15. LIFE ON LAND</li>
                            <li className="list-group-item">16. PEACE, JUSTICE AND STRONG INSTITUTIONS</li>
                            <li className="list-group-item">17. PARTNERSHIP FOR THE GOALS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardModal