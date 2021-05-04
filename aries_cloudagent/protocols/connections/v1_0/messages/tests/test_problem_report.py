"""Test Problem Report Message."""
import pytest

from asynctest import TestCase as AsyncTestCase
from unittest import mock, TestCase

from ......messaging.models.base import BaseModelError

from ..problem_report import ConnectionProblemReport, ProblemReportReason


class TestConnectionProblemReportMessage(TestCase):
    """Test problem report."""

    def setUp(self):
        self.problem_report = ConnectionProblemReport(
            description={
                "en": "Test",
                "code": ProblemReportReason.INVITATION_NOT_ACCEPTED.value,
            }
        )

    def test_init(self):
        """Test initialization."""
        self.problem_report.assign_thread_id(thid="test_thid", pthid="test_pthid")
        assert isinstance(self.problem_report, ConnectionProblemReport)
        assert isinstance(self.problem_report._id, str)
        assert len(self.problem_report._id) > 4
        assert self.problem_report._thread.thid == "test_thid"
        assert self.problem_report._thread.pthid == "test_pthid"

    def test_make_model(self):
        """Make problem report model."""
        self.problem_report.assign_thread_id(thid="test_thid", pthid="test_pthid")
        data = self.problem_report.serialize()
        model_instance = ConnectionProblemReport.deserialize(data)
        assert isinstance(model_instance, ConnectionProblemReport)

        model_instance.description["code"] = "extraneous code"
        with pytest.raises(BaseModelError):
            ConnectionProblemReport.deserialize(model_instance)

    def test_pre_dump_x(self):
        """Exercise pre-dump serialization requirements."""
        with pytest.raises(BaseModelError):
            data = self.problem_report.serialize()
