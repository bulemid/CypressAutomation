//Set authcookie
describe('authcookie', () =>{
    it('authcookie', () => {  
        cy.setCookie('lastCookie', '789XYZ')
        Cypress.Cookies.preserveOnce('lastCookie')
        })
    })
//Load google page
describe('Automation using cypress', () => {   
    it('Navigate to oaf website', () => {
        cy.server(),  
        cy.visit('https://accounts.google.com/signin/v2/identifier?hl=en&passive=true&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dgmail%26oq%3Dgm%26aqs%3Dchrome.1.69i57j69i59j69i61l3.2302j0j1%26sourceid%3Dchrome%26ie%3DUTF-8&flowName=GlifWebSignIn&flowEntry=ServiceLogin')
    })  
})

//Enter email
describe('type email', () =>{
    it('type email', () => {  
         cy.xpath('//*[@id="identifierId"]').type('quality.assurance@oneacrefund.org')
        })
    })
//Wait    
    describe('wait', () =>{
    it('wait', () => {
        
            cy.wait(20000)
    })
    })
    
//Click next
    describe('click emailnext', () =>{
        it('click emailnext', () => {
            
             cy.xpath('//*[@id="identifierNext"]/span/span').click()
            })
        })
 //Wait   
   
        describe('wait', () =>{
        it('wait', () => {
            
                cy.wait(2000)
        })
        })
//Type password
        describe('type password', () =>{
            it('type password', () => {
                
                 cy.xpath('//*[@id="password"]/div[1]/div/div[1]/input').type('OAF_SOFTWARE_QA_TEAM')
                })
            })
//Wait
            describe('wait', () =>{
                it('wait', () => {
                    
                        cy.wait(2000)
                })
            })
//Click next
                describe('click passwordnext', () =>{
                    it('click passwordnext', () => {
                        
                         cy.xpath('//*[@id="passwordNext"]/span/span').click()
                        })
                    })

describe('click on the login button', () =>{
    it('Navigate to oaf website', () => {
        cy.visit('http://qatest.oaftemp.org/Login?ReturnUrl=%2f')
    })  
})