import { Router } from "express";

acfRoute = Router();
apeeRoute = Router();
bbeRoute = Router();
kjvRoute = Router();
nviRoute = Router();
raRoute = Router();
rvrRoute = Router();

acfRoute.get(`/acf`, async(req, res) => {
    
});

apeeRoute.get(`/apee`, async(req, res) => {
    
});
bbeRoute.get(`/bbe`, async(req, res) => {
    
});
kjvRoute.get(`/kjv`, async(req, res) => {
    
});
nviRoute.get(`/nvi`, async(req, res) => {
    
});
raRoute.get(`/ra`, async(req, res) => {
    
});
rvrRoute.get(`/rvr`, async(req, res) => {
    
});

export {
    acfRoute,
    apeeRoute,
    bbeRoute,
    nviRoute,
    raRoute,
    rvrRoute
}