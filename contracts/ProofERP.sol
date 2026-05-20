// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract ProofERP {

    struct Record {
        string documentHash;
        string documentName;
        string documentType;
        uint256 timestamp;
        address author;
    }

    mapping(string => Record) private records;

    event RecordRegistered(
        string documentHash,
        string documentName,
        string documentType,
        uint256 timestamp,
        address indexed author
    );

    function registerRecord(
        string memory _documentHash,
        string memory _documentName,
        string memory _documentType
    ) public {

        require(
            records[_documentHash].timestamp == 0,
            "Document already registered"
        );

        records[_documentHash] = Record({
            documentHash: _documentHash,
            documentName: _documentName,
            documentType: _documentType,
            timestamp: block.timestamp,
            author: msg.sender
        });

        emit RecordRegistered(
            _documentHash,
            _documentName,
            _documentType,
            block.timestamp,
            msg.sender
        );
    }

    function verifyRecord(
        string memory _documentHash
    )
        public
        view
        returns (
            bool exists,
            string memory documentName,
            string memory documentType,
            uint256 timestamp,
            address author
        )
    {

        Record memory record = records[_documentHash];

        if (record.timestamp == 0) {
            return (false, "", "", 0, address(0));
        }

        return (
            true,
            record.documentName,
            record.documentType,
            record.timestamp,
            record.author
        );
    }
}