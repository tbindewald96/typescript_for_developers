export {}

type CEO = 'jeff'

type Founder = 'Bill'

type CeoAndFounder = CEO & Founder

type willNeverHappen = string & number

function neverReturns(): never {
    while (true) {
        
    }
}