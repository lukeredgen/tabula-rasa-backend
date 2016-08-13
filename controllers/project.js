/**
 * Created by Luke on 13/08/2016.
 */
"use strict"
const Project = require('../models/project'),
    Release = require('../models/release'),
    User = require('../models/user');

exports.getReleases = function (req, res, next) {
    Project.find({author: req.user._id})
        .select('_id')
        .exec(function (err, projects) {
                if (err) {
                    res.send({error: err});
                    return next(err);
                }

                let fullProjects = [];
                projects.forEach(function (project) {
                    Release.find({'projectId': project._id})
                        .sort('-createdAt')
                        .limit(1)
                        .populate({
                            path: "author",
                            select: "profile.firstName profile.lastName"
                        })
                        .exec(function (err, release) {
                            if (err) {
                                res.send({error: err});
                                return next(err);
                            }
                            fullProjects.push(release);
                            if (fullProjects.length === project.length) {
                                return res.status(200).json({projects: fullProjects});
                            }
                        });
                });
            }
        )
}

exports.getRelease = function (req, res, next) {
    Release.find({ projectId: req.params.projectId })
        .select('createdAt codename author')
        .sort('-createdAt')
        .populate({
            path: 'author',
            select: 'profile.firstName profile.lastName'
        })
        .exec(function (err, releases) {
            if (err) {
                res.send({error: err});
                return next(err);
            }

            res.status(200).json({project: releases});
        });
}

exports.newRelease = function(req, res, next) {
    if(!req.params.project) {
        req.status(422).send({ error: 'Please choose a valid project for your release.' });
        return next();
    }

    if(!req.params.codename) {
        req.status(422).send({ error: 'Please choose a codename for your release.' });
        return next();
    }

    const release = new Release({
        users: [req.user._id, req.params.project]
    });

    release.save(function(err, newRelease){
        if (err) {
            res.send({ error: err });
            return next(err);
        }

        const release = new Release({
            projectId
        })
    })
}