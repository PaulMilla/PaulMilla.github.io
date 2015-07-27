---
layout: post
title: ihiji Remote Network Speedtest
---

At ihiji, network management was our game. We would sell our small appliance to other companies whos business revolved around integrating entire home network solutions for their clients. These companies would set up a network of ip devices, and ihiji would serve as their eyes and control center if anything went wrong. Naturally, the general health of the network can be of value to a dealer, and after being with the company for close to six months I was tasked with making it happen.

![Frontend SpeedTest created using HighCharts](/images/ihiji_speedtest.png)

Quick specs:

* When: November 2013
* Where: ihiji offices
* How:
  - Remote appliance using a python opensource speetest cli script set on an 8 hour cron job
  - Backend webserver recieved data via PHP and upload it to MongoDB.
  - Frontend built unpon existing company HTML/CSS templates and HighCharts API

* Check out the company blog article [here](http://www.ihiji.com/ihiji-adds-cloud-based-network-scanning-with-auto-discovery-and-an-internet-speed-test-to-the-award-winning-ihiji-invision-remote-network-management-solution/)
